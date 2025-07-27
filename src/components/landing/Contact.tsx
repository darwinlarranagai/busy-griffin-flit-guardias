import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
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
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg">Carolina Leiva</h4>
                <p className="text-muted-foreground">Subgerente Administración y Finanzas</p>
                <p className="flex items-center mt-2 text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" /> +56 9 5795 6695
                </p>
                <p className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2" /> carolina.leiva@total-security.cl
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Rosario Ortíz</h4>
                <p className="text-muted-foreground">Jefe de Operaciones</p>
                <p className="flex items-center mt-2 text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" /> +56 9 4477 0441
                </p>
                <p className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2" /> rosario.ortiz@total-security.cl
                </p>
              </div>
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
            <form className="space-y-6">
              <div>
                <Label htmlFor="fullName">Nombre completo</Label>
                <Input id="fullName" type="text" placeholder="Tu nombre completo" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>
              <div>
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" type="tel" placeholder="+56 9 1234 5678" />
              </div>
              <div>
                <Label htmlFor="company">Empresa</Label>
                <Input id="company" type="text" placeholder="Nombre de tu empresa" />
              </div>
              <div>
                <Label htmlFor="serviceType">Tipo de servicio requerido</Label>
                <Select>
                  <SelectTrigger id="serviceType">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
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
              </div>
              <div>
                <Label htmlFor="sector">Sector de la empresa</Label>
                <Select>
                  <SelectTrigger id="sector">
                    <SelectValue placeholder="Selecciona un sector" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="aeroportuario">Aeroportuario</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Mensaje detallado sobre necesidades específicas</Label>
                <Textarea id="message" placeholder="Describe tus necesidades aquí..." rows={5} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white text-lg">
                Solicitar Cotización Gratuita en 24 Horas
              </Button>
              <Button variant="outline" size="lg" className="w-full mt-4 border-primary text-primary hover:bg-primary/10">
                Llamar Ahora para Emergencias
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;