import emailjs from "@emailjs/browser"

export function sendMail(id: string) {
    return emailjs.sendForm("service_4dx9ktd", "template_n9qzp6j", "#" + id, "RG4lRt1kD0dj7rGGX")
}