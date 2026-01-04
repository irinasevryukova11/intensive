import { CheckCircle, Sliders } from "lucide-react";

const AuthorSection = () => {
  return (
    <section id="author" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-5xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
          
          {/* Текстовый контент */}
          <div className="flex-1 text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-foreground uppercase tracking-tight">
              Кто ведет <br />
              <span className="gradient-text">интенсив?</span>
            </h2>

            <p className="text-muted-foreground/80 text-lg mb-8 font-light leading-relaxed">
              Преподаватель медитации и практик осознанности, инженер биомедицинских технологий. 
              Уже 20 лет я исследую законы жизни, причинно-следственные связи и внутренние процессы человека. 
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm mb-1 uppercase tracking-wider">
                    100+ учеников
                  </h4>
                  <p className="text-xs text-muted-foreground font-light leading-snug">
                    Прошли через авторские программы и изменили жизнь.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm mb-1 uppercase tracking-wider">
                    20 лет 
                  </h4>
                  <p className="text-xs text-muted-foreground font-light leading-snug">
                    В теме осознанности 
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground italic font-light">
              «Я не предлагаю временных решений, а даю фундаментальные навыки для жизни и учу видеть суть вещей.»
            </div>
          </div>

          {/* Блок с ФОТО */}
          <div className="w-full lg:w-[450px] relative">
            <div className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%] bg-gradient-radial from-secondary/20 to-transparent rounded-full -z-10" />
            <div className="aspect-[4/5] rounded-4xl bg-gradient-to-b from-foreground/10 to-transparent border border-foreground/10 flex items-center justify-center overflow-hidden relative shadow-2xl">
              
              {/* Само изображение */}
              <img 
                src="/irina.png" 
                alt="Ирина Иваненко" 
                className="w-full h-full object-cover"
              />

              {/* Плашка с именем поверх фото */}
              <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-2xl border-foreground/20 backdrop-blur-lg">
                <p className="text-foreground font-black text-xl tracking-tight uppercase">
                  Ирина Иваненко
                </p>
                <p className="text-primary text-[10px] font-bold uppercase tracking-widest">
                  Автор программы
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
