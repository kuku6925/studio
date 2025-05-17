import { SiteConfig } from '@/config/site';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/shared/container';

export function ServicesSection() {
  return (
    <section className="bg-background py-16 lg:py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Comprehensive IT Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a wide range of IT services designed to meet your business needs and drive success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SiteConfig.services.map((service) => (
            <Card key={service.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
