"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  phone: z.string().min(9, { message: "Por favor, introduce un número de teléfono válido." }),
  company: z.string().optional(),
  serviceType: z.string({ required_error: "Por favor, selecciona un tipo de servicio." }),
  sector: z.string({ required_error: "Por favor, selecciona un sector." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }).max(500),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // En una aplicación real, aquí enviarías los datos a tu backend.
    // Por ahora, los mostraremos en la consola y notificaremos al usuario.
    console.log(values);
    toast({
      title: "¡Formulario Enviado!",
      description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            CONTACTA CON NOSOTROS
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            La seguridad comienza con nuestra protección.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <img 
              src="/images/contact/oficina.jpg" 
              alt="Oficina de Total Security" 
              className="w-full h-64 object-cover rounded-lg mb-8 shadow-md"
            />
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg">Oficina Casa Matriz</h4>
                <p className="flex items-center mt-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" /> Av. Manquehue Norte #151, Las Condes
                </p>
                <p className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2" /> contacto@total-security.cl
                </p>
              </div>
            </div>
            <div className="mt-10 space-y-4">
              <h3 className="text-2xl font-bold mb-4">Garantías del Servicio</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Respuesta en menos de 24 horas</li>
                <li>Evaluación gratuita de riesgos</li>
                <li>Personal certificado OS-10</li>
                <li>Tecnología de última generación</li>
                <li>22 años de experiencia respaldándonos</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Solicita tu Cotización Gratuita</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="fullName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="tu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input placeholder="+56 9 1234 5678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="company" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa (Opcional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre de tu empresa" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="serviceType" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de servicio requerido</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Selecciona un servicio" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="agentes">Agentes de Seguridad (Guardias/Tácticos/Escoltas)</SelectItem>
                        <SelectItem value="cctv">Sistemas CCTV y Monitoreo</SelectItem>
                        <SelectItem value="vehiculos">Vehículos de Patrullaje/Escolta</SelectItem>
                        <SelectItem value="drones">Drones de Vigilancia</SelectItem>
                        <SelectItem value="sig">Software SIG con IA</SelectItem>
                        <SelectItem value="automatica">Vigilancia Automática 3.0</SelectItem>
                        <SelectItem value="asesoria">Asesoría Integral de Seguridad</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="sector" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sector de la empresa</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Selecciona un sector" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="aeroportuario">Aeroportuario</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje detallado sobre necesidades específicas</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe tus necesidades aquí..." rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white text-lg">
                  Solicitar Cotización Gratuita en 24 Horas
                </Button>
                <a href="tel:+56944770441">
                  <Button type="button" variant="outline" size="lg" className="w-full mt-4 border-primary text-primary hover:bg-primary/10">
                    Llamar Ahora para Emergencias
                  </Button>
                </a>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;