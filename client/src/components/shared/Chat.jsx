import React, { useEffect, useRef, useState } from "react";

import { HashLink } from "react-router-hash-link";

import { GiScrew } from "react-icons/gi";
import { PiFanFill } from "react-icons/pi";
import { BsChatDots } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import { RiSofaFill } from "react-icons/ri";
import { RiUser3Fill } from "react-icons/ri";
import { BiSolidCctv } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";
import { FaPeopleCarry } from "react-icons/fa";
import { RiLayoutGridFill } from "react-icons/ri";
import { MdOutlinePlumbing } from "react-icons/md";
import { IoClose, IoHome, IoSend } from "react-icons/io5";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Здравейте! Добре дошли в нашия чат. Как мога да Ви помогна днес?",
      sender: "bot",
      timestamp: new Date(Date.now() - 30000),
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [showServices, setShowServices] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);
  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const messagesEndRef = useRef(null);

  const services = [
    { id: "klimatici", name: "Климатици", icon: PiFanFill },
    {
      id: "elektro",
      name: "Ел. инсталации",
      icon: GiElectric,
    },
    { id: "hamalski", name: "Хамалски услуги", icon: FaPeopleCarry },
    {
      id: "gipsokarton",
      name: "Гипсокартон",
      icon: GiScrew,
    },
    { id: "sot", name: "СОТ и охрана", icon: BiSolidCctv },
    { id: "vik", name: "ВиК услуги", icon: MdOutlinePlumbing },
    {
      id: "plochki",
      name: "Плочкаджии",
      icon: RiLayoutGridFill,
    },
    {
      id: "mebeli",
      name: "Мебели",
      icon: RiSofaFill,
    },
  ];

  const serviceQuestions = {
    klimatici: [
      {
        q: "Какви марки климатици предлагате?",
        a: "Предлагаме климатици от водещи марки като Daikin, Mitsubishi Electric, LG, Samsung, Gree и Midea. Всички са с гаранция и енергиен клас A++.",
      },
      {
        q: "Колко струва монтажът на климатик?",
        a: "Цената за монтаж варира между 80-150 лв в зависимост от сложността. Включва стандартен монтаж до 3м тръбопровод. За точна оферта се свържете с нас.",
      },
      {
        q: "Предлагате ли сервиз на климатици?",
        a: "Да, предлагаме пълен сервиз - почистване, профилактика, ремонт и зареждане с фреон. Работим с всички марки климатици.",
      },
      {
        q: "Колко време отнема монтажът?",
        a: "Стандартният монтаж отнема 2-4 часа в зависимост от сложността и броя на вътрешните единици.",
      },
    ],
    elektro: [
      {
        q: "Правите ли електрически инсталации в нови сгради?",
        a: "Да, изпълняваме пълни електроинсталации в нови сгради според БДС и европейските стандарти. Работим с лицензирани електротехници.",
      },
      {
        q: "Предлагате ли смяна на електрически табла?",
        a: "Да, сменяме остарели табла с нови, съответстващи на съвременните изисквания за безопасност. Включва и издаване на протокол.",
      },
      {
        q: "Колко струва електроинсталация за апартамент?",
        a: "Цената зависи от квадратурата и сложността. За стандартен двустаен апартамент цената е около 800-1200 лв.",
      },
      {
        q: "Правите ли спешни електрически ремонти?",
        a: "Да, работим и в спешни случаи. При аварии се обаждайте на нашия телефон - екипът ни е на разположение 24/7.",
      },
    ],
    hamalski: [
      {
        q: "Какви хамалски услуги предлагате?",
        a: "Предлагаме пренасяне на мебели, товарене/разтоварване, преместване на офиси и домове, транспорт на тежки предмети.",
      },
      {
        q: "Имате ли собствен транспорт?",
        a: "Да, разполагаме с камиони и бусове с различен товароносимост. Предоставяме и опаковъчни материали при нужда.",
      },
      {
        q: "Работите ли и в почивни дни?",
        a: "Да, работим и в почивни дни срещу малка доплата. Предварително се договаряме за часа и датата.",
      },
      {
        q: "Застраховани ли са вещите при пренасяне?",
        a: "Да, всички вещи са застраховани срещу повреди при транспортиране. Работим внимателно и професионално.",
      },
    ],
    gipsokarton: [
      {
        q: "Правите ли окачени тавани?",
        a: "Да, изпълняваме всички видове окачени тавани - прави, фигурни, с вградено осветление и шумоизолация.",
      },
      {
        q: "Монтирате ли преградни стени?",
        a: "Да, монтираме преградни стени от гипсокартон със или без звукоизолация. Подходящи за офиси и домове.",
      },
      {
        q: "Колко време отнема работата?",
        a: "За стандартна стая таванът се прави за 1-2 дни. Преградните стени - също 1-2 дни в зависимост от размера.",
      },
      {
        q: "Предлагате ли и шпакловка?",
        a: "Да, включваме пълна довършителна работа - шпакловка, грундиране и подготовка за боядисване.",
      },
    ],
    sot: [
      {
        q: "Какви охранителни системи инсталирате?",
        a: "Инсталираме видеонаблюдение, алармени системи, контрол на достъпа, пожароизвестяване и СОТ съгласно нормативите.",
      },
      {
        q: "Предлагате ли поддръжка на системите?",
        a: "Да, предлагаме редовна поддръжка, техническо обслужване и 24/7 мониторинг на алармените системи.",
      },
      {
        q: "Правите ли СОТ проекти?",
        a: "Да, имаме лицензирани проектанти за СОТ системи. Изпълняваме пълния цикъл - проект, монтаж и въвеждане в експлоатация.",
      },
      {
        q: "Колко камери мога да поставя?",
        a: "Няма ограничение в броя камери. Правим оглед и препоръчваме оптималното разположение според нуждите ви.",
      },
    ],
    vik: [
      {
        q: "Правите ли спешни ВиК ремонти?",
        a: "Да, работим 24/7 при аварии - спукани тръби, проблеми с канализацията, течове. Бързо реагираме.",
      },
      {
        q: "Сменяте ли стари тръбопроводи?",
        a: "Да, сменяме остарели тръбопроводи с нови PVC или PPR тръби. Работим в жилища и офиси.",
      },
      {
        q: "Монтирате ли санитарни узли?",
        a: "Да, правим пълен монтаж на санитарни възли - тоалетни, мивки, душкабини, вани, плочки и всички необходими връзки.",
      },
      {
        q: "Почиствате ли канализация?",
        a: "Да, разполагаме със специализирано оборудване за почистване на канализационни тръби и отпушване.",
      },
    ],
    plochki: [
      {
        q: "Какви плочки полагате?",
        a: "Полагаме всички видове плочки - подови, стенни, теракот, гранитогрес, мозайка. За бани, кухни, тераси и други помещения.",
      },
      {
        q: "Предлагате ли и материали?",
        a: "Да, можем да предоставим качествени плочки, лепила и фугопълнители от проверени доставчици на отлични цени.",
      },
      {
        q: "Правите ли хидроизолация?",
        a: "Да, правим професионална хидроизолация преди полагане на плочки, особено важно за бани и тераси.",
      },
      {
        q: "Колко струва полагането на плочки?",
        a: "Цената е 15-25 лв/кв.м в зависимост от вида плочки и сложността на работата. Включва почистване и фугиране.",
      },
    ],
    mebeli: [
      {
        q: "Какви мебели изработвате?",
        a: "Изработваме кухни, гардероби, библиотеки, офис мебели, детски стаи - всичко по индивидуален проект и размери.",
      },
      {
        q: "Колко време отнема изработката?",
        a: "Стандартно 2-4 седмици от потвърждаване на проекта. При по-сложни поръчки може да отнеме до 6 седмици.",
      },
      {
        q: "Предлагате ли 3D визуализация?",
        a: "Да, правим 3D проект за всяка поръчка, за да видите как ще изглежда мебелта преди изработката.",
      },
      {
        q: "Какви материали използвате?",
        a: "Работим с висококачествени ПДЧ плоскости, масив, МДФ и други материали според вашите предпочитания и бюджет.",
      },
    ],
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleServiceSelect = (service) => {
    setCurrentService(service);
    setShowServices(false);

    const serviceMessage = {
      id: Date.now(),
      text: `Избрахте ${service.name}`,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, serviceMessage]);

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: `Отлично! Как мога да ви помогна с ${service.name.toLowerCase()}? Ето някои често задавани въпроси:`,
        sender: "bot",
        timestamp: new Date(),
        showQuestions: true,
        serviceId: service.id,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const handleQuestionSelect = (question, answer) => {
    const questionMessage = {
      id: Date.now(),
      text: question,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, questionMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: answer,
        sender: "bot",
        timestamp: new Date(),
        showContactOption: true,
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: "Благодаря за въпроса! За по-детайлна информация и безплатен оглед, моля свържете се директно с нашия екип.",
        sender: "bot",
        timestamp: new Date(),
        showContactOption: true,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const resetChat = () => {
    setCurrentService(null);
    setShowServices(true);
    setMessages([
      {
        id: 1,
        text: "Здравейте! Добре дошли в нашия чат. Как мога да Ви помогна днес?",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${
          scrollY > 300 ? "bottom-20" : "bottom-5"
        } right-5 z-50 flex justify-center items-center bg-[#002B5B] text-white w-[3rem] h-[3rem] rounded-full shadow-md text-2xl hover:bg-blue-900 cursor-pointer transition-all duration-300 ease-in-out`}
      >
        <BsChatDots />
      </button>
      <div
        className={`fixed z-999 ${
          isOpen ? "translate-x-0" : "translate-x-100"
        } right-0 bottom-0 max-w-96 flex flex-col h-screen bg-gradient-to-br from-blue-50 to-white transition-all`}
      >
        {/* Header */}
        <div className="bg-white shadow-lg border-b border-[#002B5B]">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={resetChat}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              title="Начало"
            >
              <IoHome size={20} style={{ color: "#002B5B" }} />
            </button>
            <div className="flex items-center">
              <div>
                <h1 className="text-lg font-semibold text-gray-800">
                  Помощник за услуги
                </h1>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              title="Изход"
            >
              <IoClose size={20} style={{ color: "#002B5B" }} />
            </button>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Services Menu */}
          {showServices && (
            <div className="bg-white rounded-lg shadow-md p-4 border border-[#002B5B] animate-fade-in">
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "#002B5B" }}
              >
                Изберете услуга:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service)}
                      className="flex flex-col items-center space-x-2 p-3 rounded-lg border border-[#002B5B] transition-all duration-200  text-[#002B5B] group hover:shadow-md hover:-translate-y-1"
                    >
                      <IconComponent
                        size={20}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {service.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {messages.map((message) => (
            <div key={message.id} className="space-y-3">
              <div
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                } animate-fade-in`}
              >
                <div
                  className={`flex max-w-xs lg:max-w-md ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  } items-end space-x-2`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 ${
                      message.sender === "user" ? "ml-2" : "mr-2"
                    }`}
                    style={{
                      backgroundColor:
                        message.sender === "user" ? "#002B5B" : "#6B7280",
                    }}
                  >
                    {message.sender === "user" ? (
                      <RiUser3Fill size={16} />
                    ) : (
                      <GrUserWorker size={16} />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`rounded-2xl px-4 py-2 shadow-md ${
                      message.sender === "user"
                        ? "text-white rounded-br-md"
                        : "bg-white text-gray-800 rounded-bl-md border"
                    }`}
                    style={{
                      backgroundColor:
                        message.sender === "user" ? "#002B5B" : undefined,
                    }}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user"
                          ? "text-blue-100"
                          : "text-gray-500"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Questions for current service */}
              {message.showQuestions && currentService && (
                <div className="bg-white rounded-lg shadow-md p-4 border border-[#002B5B] ml-10 animate-fade-in">
                  <div className="space-y-2">
                    {serviceQuestions[currentService.id]?.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuestionSelect(item.q, item.a)}
                        className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors border border-[#002B5B] hover:border-blue-300"
                      >
                        <span className="text-sm text-gray-700">{item.q}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Option */}
              {message.showContactOption && (
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-md p-4 border border-[#002B5B] ml-10 animate-fade-in">
                  <p className="text-sm text-gray-600 mb-3">
                    Не намерихте отговора, който търсите?
                  </p>
                  <div className="flex space-x-2">
                    <HashLink
                      to="/#contact"
                      className="inline-flex items-center px-4 py-2 text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
                      style={{ backgroundColor: "#002B5B" }}
                    >
                      <span className="text-sm font-medium">
                        Свържете се с нас
                      </span>
                    </HashLink>
                    <button
                      onClick={resetChat}
                      className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <span className="text-sm">Нова услуга</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="flex items-end space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white mr-2">
                  <GrUserWorker size={16} />
                </div>
                <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-md border">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-[#002B5B] p-4">
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage(e)}
                placeholder="Напишете вашия въпрос..."
                className="w-full px-4 py-3 bg-gray-50 rounded-full border border-[#002B5B] focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                style={{ focusRing: "2px solid #002B5B" }}
                onFocus={(e) =>
                  (e.target.style.boxShadow = "0 0 0 2px #002B5B")
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
            </div>

            <button
              type="button"
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="w-12 h-12 rounded-full text-white bg-[#002B5B] flex items-center justify-center cursor-pointer transition-all duration-200 transform  hover:scale-105 hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <IoSend size={24} className="pl-0.5" />
            </button>

            {/* className={`fixed right-5 z-50 flex justify-center items-center bg-[#002B5B] text-white w-[3rem] h-[3rem] rounded-full shadow-md text-2xl hover:bg-blue-900 cursor-pointer transition-all duration-300 ease-in-out
        ${isVisible ? "bottom-5 opacity-100" : "bottom-[-60px] opacity-0"}`} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
