import { Cpu } from 'lucide-react';

export function Ai() {
  return (
    <section id="ai" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Artificial Intelligence</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Harness the power of AI to transform your business. Our AI solutions
            are designed to automate processes, provide insights, and enhance
            decision-making.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">AI Consulting</h3>
              <p className="text-muted-foreground">
                Our experts provide strategic guidance on AI adoption and
                implementation.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Web Scraping</h3>
              <p className="text-muted-foreground">
                Develop and deploy machine learning models tailored to your
                needs.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Openai & Anthropic API integration</h3>
              <p className="text-muted-foreground">
                Leverage data to gain actionable insights and drive business
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}