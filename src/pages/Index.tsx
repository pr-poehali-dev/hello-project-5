import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    robloxNick: '',
    email: '',
    orderDescription: ''
  });
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const generateOrderNumber = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `WB${timestamp.toString().slice(-6)}${random.toString().padStart(3, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    
    const mailtoLink = `mailto:sautinura142@gmail.com?subject=Заказ WB 3008 - ${newOrderNumber}&body=Номер заказа: ${newOrderNumber}%0AНик в Roblox: ${formData.robloxNick}%0AEmail: ${formData.email}%0AОписание заказа: ${formData.orderDescription}`;
    window.location.href = mailtoLink;
    
    setCurrentStep(0);
    setIsDialogOpen(true);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsDialogOpen(false);
      setCurrentStep(0);
    }
  };

  const renderDialogContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <DialogContent className="max-w-md">
            <DialogHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Icon name="Check" className="text-green-600" size={32} />
              </div>
              <DialogTitle className="text-2xl text-wb-navy">Заказ принят!</DialogTitle>
              <DialogDescription className="text-lg">
                Ваш номер заказа:
              </DialogDescription>
            </DialogHeader>
            <div className="text-center py-6">
              <div className="text-3xl font-bold text-wb-red bg-wb-red/10 py-4 px-6 rounded-lg border-2 border-wb-red/20">
                {orderNumber}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Сохраните этот номер для отслеживания заказа
              </p>
            </div>
            <Button onClick={nextStep} className="w-full bg-wb-red hover:bg-wb-coral text-white">
              Продолжить
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </DialogContent>
        );
      case 1:
        return (
          <DialogContent className="max-w-md">
            <DialogHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Icon name="UserPlus" className="text-blue-600" size={32} />
              </div>
              <DialogTitle className="text-xl text-wb-navy">Добавьте в друзья</DialogTitle>
            </DialogHeader>
            <div className="text-center py-4">
              <p className="text-gray-600 mb-4">Примите запрос в друзья от</p>
              <div className="text-2xl font-bold text-wb-blue bg-wb-blue/10 py-3 px-4 rounded-lg border-2 border-wb-blue/20 mb-6">
                Girl_908535
              </div>
              <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                <Icon name="Users" className="mr-2" size={16} />
                Это необходимо для обработки заказа
              </div>
            </div>
            <Button onClick={nextStep} className="w-full bg-wb-blue hover:bg-wb-navy text-white">
              Принял(а)
              <Icon name="Check" className="ml-2" size={16} />
            </Button>
          </DialogContent>
        );
      case 2:
        return (
          <DialogContent className="max-w-md">
            <DialogHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Icon name="LogIn" className="text-purple-600" size={32} />
              </div>
              <DialogTitle className="text-xl text-wb-navy">Войдите в игру</DialogTitle>
            </DialogHeader>
            <div className="text-center py-4">
              <p className="text-gray-600 mb-4">Заходите через аккаунт</p>
              <div className="text-2xl font-bold text-purple-600 bg-purple-100 py-3 px-4 rounded-lg border-2 border-purple-200 mb-6">
                Girl_908535
              </div>
              <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                <Icon name="Gamepad2" className="mr-2" size={16} />
                Используйте этот аккаунт для входа в игру
              </div>
            </div>
            <Button onClick={nextStep} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              ОК
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </DialogContent>
        );
      case 3:
        return (
          <DialogContent className="max-w-md">
            <DialogHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-wb-turquoise/20 rounded-full flex items-center justify-center">
                <Icon name="MapPin" className="text-wb-turquoise" size={32} />
              </div>
              <DialogTitle className="text-xl text-wb-navy">Финальный шаг</DialogTitle>
            </DialogHeader>
            <div className="text-center py-4">
              <p className="text-gray-600 mb-6">Последнее действие:</p>
              <div className="text-2xl font-bold text-wb-turquoise bg-wb-turquoise/10 py-4 px-6 rounded-lg border-2 border-wb-turquoise/20 mb-6">
                Идите на свист
              </div>
              <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                <Icon name="Navigation" className="mr-2" size={16} />
                Найдите локацию "свист" в игре
              </div>
            </div>
            <Button onClick={nextStep} className="w-full bg-wb-turquoise hover:bg-wb-turquoise/80 text-wb-navy font-semibold">
              ОК, понятно!
              <Icon name="Check" className="ml-2" size={16} />
            </Button>
          </DialogContent>
        );
      default:
        return null;
    }
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
            <p className="text-gray-300">© 2025 WB 3008. Лучший сервис для Roblox игроков.</p>
          </div>
        </footer>
      </div>

      {/* Order Process Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {renderDialogContent()}
      </Dialog>
    </div>
  );
};

export default Index;