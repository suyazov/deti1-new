import { useState } from 'react';
import { InputMask } from '@react-input/mask';
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { UiButton as Button } from '@/components/ui/UiButton';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface PresentationModalProps {
  children: React.ReactNode;
}

export function PresentationModal({ children }: PresentationModalProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', website: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return;
    setStatus('loading');

    try {
      const response = await fetch('/api/send.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
        }),
      });

      const data = await response.json().catch(() => ({ ok: false, message: 'Ошибка сервера' }));

      if (response.ok && data.ok) {
        setStatus('success');
        setForm({ name: '', phone: '', website: '' });
        setTimeout(() => {
          setOpen(false);
          setStatus('idle');
        }, 2500);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-[#FDFBF7] border-[#e5e5e5]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#2D3436]">
            Получить презентацию
          </DialogTitle>
          <DialogDescription className="text-[#636e72]">
            Оставьте контакты — Анна вышлет материалы и ответит на вопросы
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label htmlFor="modal-name" className="sr-only">
              Ваше имя
            </label>
            <input
              id="modal-name"
              type="text"
              placeholder="Ваше имя"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="pill-input w-full"
            />
          </div>

          <div>
            <label htmlFor="modal-phone" className="sr-only">
              Телефон
            </label>
            <InputMask
              id="modal-phone"
              mask="+7 (___) ___-__-__"
              replacement={{ _: /\d/ }}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+7 (___) ___-__-__"
              type="tel"
              required
              className="pill-input w-full"
            />
          </div>

          {/* Honeypot */}
          <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
            />
          </div>

          <Button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="w-full py-4"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Отправка...
              </>
            ) : status === 'success' ? (
              <>
                <CheckCircle className="w-4 h-4" /> Отправлено
              </>
            ) : (
              <>
                Отправить заявку <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>

          {status === 'success' && (
            <p className="flex items-center justify-center gap-2 text-sm text-[#00897b]">
              <CheckCircle className="w-4 h-4" />
              Заявка отправлена. Анна свяжется с вами в ближайшее время.
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-center justify-center gap-2 text-sm text-[#dc2626]">
              <AlertCircle className="w-4 h-4" />
              Не удалось отправить заявку. Попробуйте ещё раз.
            </p>
          )}

          <p className="text-xs text-[#636e72] text-center">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
