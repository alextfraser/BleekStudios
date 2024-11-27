import { Cpu } from 'lucide-react';

export function Ai() {
  return (
    <section id="ai" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Artificial Intelligence</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Transform your business with cutting-edge AI solutions. We specialize in 
            developing custom AI applications that streamline operations, uncover 
            valuable insights, and enhance your competitive advantage.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Ai Consulting</h3>
              <p className="text-muted-foreground">
                Get expert guidance on AI strategy, implementation, and optimization. 
                We help you identify the right AI solutions for your specific business 
                needs and challenges.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Data Collection & Analysis</h3>
              <p className="text-muted-foreground">
                Leverage advanced web scraping and data analysis tools to gather 
                actionable insights. Transform raw data into valuable business 
                intelligence using AI-powered analytics.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Ai Integration Services</h3>
              <p className="text-muted-foreground">
                Seamlessly integrate OpenAI, Anthropic, xAi, Gemini APIs into your applications. 
                Build powerful AI features using industry-leading language models and 
                tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ai;