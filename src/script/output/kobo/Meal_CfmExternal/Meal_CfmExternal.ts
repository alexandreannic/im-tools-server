import {Meal_CfmExternalOptions} from './Meal_CfmExternalOptions'

type Opt<T extends keyof typeof Meal_CfmExternalOptions> = keyof (typeof Meal_CfmExternalOptions)[T]

// Form id: aJaGLvGEdpYWk5ift8k87y
export interface Meal_CfmExternal {
  start: string,
  end: string,
  // [note] Зверніть увагу, що ви збираєтеся поділитися своїми особистими контактними даними з DRC, щоб команда могла відповісти на ваш відгук.     Якщо ви бажаєте зв'язатися з нами напряму, ви можете зателефонувати на нашу гарячу лінію. #### 📞 0 800 33 95 18.
  consent: string,
  // [select_one] Чи отримували ви вже якусь допомогу від DRC безпосередньо або від партнерів DRC?
  existing_beneficiary: undefined | Opt<'prot_support'>,
  // [text] Якщо так, опишіть Вашу взаємодію за підтримки DRC
  explain_beneficiary: string | undefined,
  // [text] Ім'я
  name: string | undefined,
  // [select_one] Стать
  gender: undefined | Opt<'gender'>,
  // [date] Дата
  date: Date | undefined,
  // [select_multiple] Я віддаю перевагу не надавати свій номер телефону і розумію
  no_phone: undefined | Opt<'no_phone'>[],
  // [text] Контактний номер
  phone: string | undefined,
  // [text] Електронна адреса
  email: string | undefined,
  // [select_one] Виберіть область в якій проживаєте
  ben_det_oblast: undefined | Opt<'ben_det_oblast'>,
  // [select_one] Виберіть район в якому проживаєте
  ben_det_raion: undefined | string,
  // [select_one] Виберіть громаду в якій проживаєте
  ben_det_hromada: undefined | string,
  // [text] Населений пункт в якому проживаєте
  ben_det_settlement: string | undefined,
  // [select_one] Як ми можемо Вам допомогти?
  feedback_type: undefined | Opt<'feedback_type'>,
  // [text] У разі подяки або відгуку надайте додаткову інформацію
  thanks_feedback: string | undefined,
  // [text] Будь ласка, надайте інформацію щодо вашої скарги
  complaint: string | undefined,
  // [select_one] Ви готові обговорити це з нашою командою DRC, чи Ви хотіли поговорити зі спеціалістом з чутливих випадків?
  prot_support: undefined | Opt<'prot_support'>,
  // [text] Будь ласка, надайте інформацію щодо прохання про допомогу
  request: string | undefined,
  // [text] Коментар
  comments: string | undefined,
  // [note] Дякуємо, що пройшли це опитування. Ви можете будь-коли скористатися цим інструментом зворотного зв’язку або зателефонувати на нашу гарячу лінію CFM.
  thanks: string,
}