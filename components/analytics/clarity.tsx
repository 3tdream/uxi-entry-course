import Script from 'next/script'

/**
 * Microsoft Clarity — heatmap кликов и скролла + запись сессий.
 *
 * Спит, пока не задан NEXT_PUBLIC_CLARITY_ID: без переменной вообще ничего не
 * грузится и в разметку не попадает. Тот же приём, что с Clerk — код можно
 * выкатывать раньше, чем заведён аккаунт.
 *
 * ⚠️ Запись сессий = обработка персональных данных. В настройках проекта
 * Clarity включи маскирование текста (Settings → Masking → Mask all text),
 * и предупреди студентов, что сессии записываются.
 */
export function Clarity() {
  const id = process.env.NEXT_PUBLIC_CLARITY_ID
  if (!id) return null

  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","${id}");`}
    </Script>
  )
}
