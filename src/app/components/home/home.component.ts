import { Component, OnInit } from '@angular/core';

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionResult {
  [index: number]: SpeechRecognitionAlternative;
  length: number;
  isFinal: boolean;
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult;
  length: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Vocal esperada
  Vocal : any[] = ['a','e','o','u'];
  random: any= 0;
  expectedVowel: string = 'a';
  // Bandera para habilitar el botón "Siguiente" si la pronunciación es correcta
  isCorrect: boolean = false;
  // Texto reconocido de la pronunciación del usuario
  recognizedText: string = '';

  recognition: any;
  recognitionStarted: boolean = false;

  ngOnInit(): void {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      console.log("this.recognition: ", this.recognition);
      this.recognition.lang = 'es-ES';
      // Manejador cuando el reconocimiento inicia
      this.recognition.onstart = () => {
        console.log("Reconocimiento de voz iniciado...");
      };

      // Manejador para obtener el resultado del reconocimiento
      this.recognition.onresult = (event: any) => {
        console.log("event: ", event);
        const results = event.results as SpeechRecognitionResultList;
        const transcript = results[0][0].transcript;
        console.log("Resultado de voz:", transcript);
        this.recognizedText = transcript;
        this.checkPronunciation(transcript);
      };

      // Manejador para errores, incluyendo el error "network"
      this.recognition.onerror = (event: any) => {
        console.error("Error en el reconocimiento de voz:", event.error);
        if (event.error === 'network') {
          alert("Error de red. Por favor, verifica tu conexión a Internet.");
          // Reiniciamos el estado para poder intentar de nuevo
          this.recognition.stop();
          this.recognitionStarted = false;
        }
      };
      this.numeroAleatorio(0,4)
      // Manejador que se dispara al finalizar el reconocimiento
      this.recognition.onend = () => {
        console.log("Reconocimiento de voz finalizado.");
        this.recognitionStarted = false;
      };
    } else {
      alert("El reconocimiento de voz no es compatible con este navegador.");
    }
    this.Vocal[this.random];
  }

numeroAleatorio(max:any, min:any){
  this.random=(Math.round(Math.random()*(max - min)+min)); 
  console.log("this.random: ", this.random);
}
  // Genera el audio de la vocal usando SpeechSynthesis (Text-to-Speech)
  playVowelSound(vowel: any): void {
    this.expectedVowel = vowel;
    const utterance = new SpeechSynthesisUtterance(vowel);
    utterance.lang = 'es-ES';
    window.speechSynthesis.speak(utterance);
  }

  // Inicia el reconocimiento de voz para capturar la pronunciación del usuario
  startRecognition(): void {
    if (!this.recognitionStarted && this.recognition) {
      this.recognitionStarted = true;
      this.recognition.start();
    } else {
      console.log("El reconocimiento ya está iniciado o no está disponible.");
    }
  }

  // Compara el texto reconocido con la vocal esperada
  checkPronunciation(transcript: string): void {
    this.isCorrect = transcript.toLowerCase().trim() === this.expectedVowel;
  }
}
