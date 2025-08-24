import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    robloxNick: '',
    email: '',
    orderDescription: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sautinura142@gmail.com?subject=Заказ WB 3008&body=Ник в Roblox: ${formData.robloxNick}%0AEmail: ${formData.email}%0AОписание заказа: ${formData.orderDescription}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wb-red via-wb-coral to-wb-turquoise">
      <div className="min-h-screen bg-gradient-to-b from-black/20 to-transparent">
        {/* Header */}
        <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Icon name="Gamepad2" className="text-white" size={32} />
                <h1 className="text-2xl font-bold text-white">WB 3008</h1>
              </div>
              <div className="flex space-x-6">
                <a href="#home" className="text-white hover:text-wb-turquoise transition-colors">Главная</a>
                <a href="#order" className="text-white hover:text-wb-turquoise transition-colors">Заказать</a>
                <a href="#contacts" className="text-white hover:text-wb-turquoise transition-colors">Контакты</a>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <div className="animate-fade-in">
              <Icon name="Zap" className="mx-auto mb-6 text-wb-turquoise" size={64} />
              <h1 className="text-6xl font-bold mb-6">WB 3008</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Добро пожаловать в мир WB 3008! Закажите всё необходимое для вашего игрового опыта в Roblox.
                Быстро, надёжно, качественно.
              </p>
              <Button 
                size="lg" 
                className="bg-wb-turquoise hover:bg-wb-turquoise/80 text-wb-navy font-semibold px-8 py-3 text-lg"
                onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Сделать заказ
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </section>

        {/* Order Form Section */}
        <section id="order" className="py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur-md border-0 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-wb-navy mb-2">
                  <Icon name="ShoppingCart" className="inline mr-3 text-wb-red" size={32} />
                  Форма заказа
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Заполните форму ниже, чтобы сделать заказ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-wb-navy font-semibold flex items-center">
                      <Icon name="User" className="mr-2 text-wb-red" size={18} />
                      Ник в Roblox
                    </label>
                    <Input
                      type="text"
                      placeholder="Введите ваш ник в Roblox"
                      value={formData.robloxNick}
                      onChange={(e) => setFormData(prev => ({ ...prev, robloxNick: e.target.value }))}
                      required
                      className="border-2 border-gray-200 focus:border-wb-red"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-wb-navy font-semibold flex items-center">
                      <Icon name="Mail" className="mr-2 text-wb-turquoise" size={18} />
                      Электронная почта
                    </label>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="border-2 border-gray-200 focus:border-wb-turquoise"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-wb-navy font-semibold flex items-center">
                      <Icon name="FileText" className="mr-2 text-wb-coral" size={18} />
                      Что хотите заказать
                    </label>
                    <Textarea
                      placeholder="Опишите подробно ваш заказ..."
                      value={formData.orderDescription}
                      onChange={(e) => setFormData(prev => ({ ...prev, orderDescription: e.target.value }))}
                      required
                      rows={4}
                      className="border-2 border-gray-200 focus:border-wb-coral resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-wb-red hover:bg-wb-coral text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заказ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contacts Section */}
        <section id="contacts" className="py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Контакты</h2>
            <div className="max-w-md mx-auto">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <Icon name="Mail" className="text-wb-turquoise mr-3" size={24} />
                    <span className="text-lg font-semibold">Email для заказов</span>
                  </div>
                  <p className="text-wb-turquoise text-xl font-mono">sautinura142@gmail.com</p>
                  <div className="mt-6 flex justify-center space-x-6">
                    <div className="flex items-center text-sm">
                      <Icon name="Clock" className="mr-2 text-wb-coral" size={16} />
                      Быстрый ответ
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="Shield" className="mr-2 text-wb-turquoise" size={16} />
                      Надёжно
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-wb-navy/80 backdrop-blur-md border-t border-white/10 py-8">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Gamepad2" className="mr-2 text-wb-turquoise" size={24} />
              <span className="text-xl font-bold">WB 3008</span>
            </div>
            <p className="text-gray-300">© 2024 WB 3008. Лучший сервис для Roblox игроков.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;