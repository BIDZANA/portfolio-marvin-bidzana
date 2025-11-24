import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Important pour le formulaire
  templateUrl: './contact.html',
  styles: [`
    /* Animation de shake en cas d'erreur */
    .shake { animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both; transform: translate3d(0, 0, 0); backface-visibility: hidden; perspective: 1000px; }
    @keyframes shake { 10%, 90% { transform: translate3d(-1px, 0, 0); } 20%, 80% { transform: translate3d(2px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-4px, 0, 0); } 40%, 60% { transform: translate3d(4px, 0, 0); } }
  `]
})
export class Contact {
  contactForm: FormGroup;
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      from_name: ['', [Validators.required, Validators.minLength(3)]],
      from_email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched(); // Affiche les erreurs si l'utilisateur clique sans remplir
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    try {
      // REMPLACE CES VALEURS PAR LES TIENNES (voir explications plus bas) 👇
      const serviceID = 'service_zmw61mq';
      const templateID = 'template_8axzoea';
      const publicKey = 'kRTiX3ukSBnaCv5qu';

      // Envoi de l'email
      await emailjs.send(serviceID, templateID, {
        from_name: this.contactForm.value.from_name,
        from_email: this.contactForm.value.from_email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
      }, publicKey);

      this.successMessage = 'Message envoyé avec succès ! Je te répondrai très vite.';
      this.contactForm.reset();

    } catch (error) {
      console.error('Erreur d\'envoi:', error);
      this.errorMessage = 'Oups ! Une erreur est survenue. Tu peux me contacter directement par email ou téléphone.';
    } finally {
      this.isLoading = false;
    }
  }
}