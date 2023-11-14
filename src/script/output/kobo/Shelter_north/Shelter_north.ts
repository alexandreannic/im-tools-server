import {Shelter_northOptions} from './Shelter_northOptions'

type Opt<T extends keyof typeof Shelter_northOptions> = keyof (typeof Shelter_northOptions)[T]

// Form id: aCPdwVnnsYeReynJ7YnLGH
export interface Shelter_north {
  start: string,
  end: string,
  // [select_one] Офіс
  back_office: undefined | Opt<'back_office'>,
  // [select_one] Ім'я регістратора
  __007: undefined | Opt<'__007'>,
  // [select_one] Чи заключений договорі для відновлення житла?
  there_contract: undefined | Opt<'physical_family'>,
  // [select_one] Якій донор проводить допомогу по відновленню житла ?
  donor_repair: undefined | Opt<'donor_repair'>,
  // [image] Фото пошкоджень (1)
  fp1: string,
  // [image] Фото пошкоджень (2)
  fp2: string,
  // [image] Фото пошкоджень (3)
  fp3: string,
  // [image] Фото пошкоджень (4)
  fp4: string,
  // [image] Фото пошкоджень (5)
  fp5: string,
  // [image] Фото пошкоджень (6)
  fp6: string,
  // [image] Фото пошкоджень (7)
  fp7: string,
  // [image] Фото пошкоджень (8)
  fp8: string,
  // [image] Фото пошкоджень (9)
  fp9: string,
  // [image] Фото пошкоджень (10)
  fp10: string,
  // [image] Фото пошкоджень (11)
  fp11: string,
  // [image] Фото пошкоджень (12)
  fp12: string,
  // [image] Фото пошкоджень (13)
  fp13: string,
  // [image] Фото пошкоджень (14)
  fp14: string,
  // [image] Фото пошкоджень (15)
  fp15: string,
  // [integer] Кількість пошкоджених вікон
  _Number_of_damaged_windows: number | undefined,
  // [text] Площа пошкоджень вікон
  ppvi: string | undefined,
  // [integer] Кількість пошкоджених склопакетів
  __027: number | undefined,
  // [text] Площа пошкоджень склопакетів
  ppskv: string | undefined,
  // [integer] Кількість пошкоджених балконів
  _Number_of_damaged_balcony: number | undefined,
  // [text] Об'єм пошкоджень балконів
  opbal: string | undefined,
  // [integer] Кількість пошкоджених склопакетів балконів
  __028: number | undefined,
  // [text] Площа пошкоджених склопакетів балконів
  ppsb: string | undefined,
  // [integer] Кількість пошкоджених дверей
  Nodd: number | undefined,
  // [text] Коментар до пошкоджених дверей
  kpd: string | undefined,
  // [select_one] Чи є пошкодження даху
  _Is_there_damage_to_the_: undefined | Opt<'physical_family'>,
  // [integer] Кількість пошкоджених скатів
  kpos: number | undefined,
  // [integer] Кількість пошкоджених балок даху
  kpbd: number | undefined,
  // [integer] Площа пошкоджень даху
  ppda: number | undefined,
  // [select_one] Тип матеріала
  tm: undefined | Opt<'tm'>,
  // [select_one] Чи потрібне відновлення водопроводу
  _Is_there_damage_water_p: undefined | Opt<'physical_family'>,
  // [text] Коментар до водопроводу
  kdv: string | undefined,
  // [select_one] Чи потрібне відновлення електромережі
  _Is_there_damage_electri: undefined | Opt<'physical_family'>,
  // [text] Коментар до електромережі
  kde: string | undefined,
  // [select_one] Чи потрібне відновлення опалення
  __006: undefined | Opt<'physical_family'>,
  // [text] Коментар до опалення
  __023: string | undefined,
  // [select_one] Чи є незначні неструктурні пошкодження стін
  __004: undefined | Opt<'physical_family'>,
  // [text] Коментар до незначних неструктурних пошкоджень стін
  kdnnps: string | undefined,
  // [select_one] Чи потрібен незначний ремонт тріщин у зовнішніх цегляних стінах
  __005: undefined | Opt<'physical_family'>,
  // [text] Коментар до незначних тріщин у зовнішніх цегляних стінах
  kdnt: string | undefined,
  // [text] ПІБ Бенефіціара(Заявник)
  __009: string | undefined,
  // [select_one] Вкажіть ваш статус
  __008: undefined | Opt<'__008'>,
  // [select_one] Стать заявника(ВПО)
  stv: undefined | Opt<'sph10k'>,
  // [integer] Вік заявника (ВПО)
  vtv: number | undefined,
  // [select_one] Стать заявника(що постраждав від конфлікту)
  stb: undefined | Opt<'sph10k'>,
  // [integer] Вік заявника(що постраждав від конфлікту)
  vtb: number | undefined,
  // [integer] Номер телефону
  __016: number | undefined,
  // [integer] Додатковий номер телефону
  aph: number | undefined,
  // [select_one] Виберіть область, де буде проходити реєстрація
  ben_det_oblast: undefined | Opt<'ben_det_oblast'>,
  // [select_one] Виберіть район, де буде проходити реєстрація
  ben_det_raion: undefined | Opt<'ben_det_raion'>,
  // [select_one] Виберіть громаду, де відбувається реєстрація
  ben_det_hromada: undefined | Opt<'ben_det_hromada'>,
  // [select_one] Виберіть місто, де відбувається реєстрація
  ben_det_city: undefined | Opt<'ben_det_city'>,
  // [text] Адреса пошкодження(вулиця)
  __012: string | undefined,
  // [text] Номер будинку і корпус
  __013: string | undefined,
  // [text] Номер квартири
  __014: string | undefined,
  // [text] Паспорт
  pas: string | undefined,
  // [text] ІПН
  ipn: string | undefined,
  // [text] Адреса за реєстрацією
  __017: string | undefined,
  // [image] Фото документів
  fd1: string,
  // [image] Фото документів
  fd2: string,
  // [image] Фото документів
  fd3: string,
  // [image] Фото документів
  fd4: string,
  // [image] Фото документів
  fd5: string,
  // [image] Фото документів
  fd6: string,
  // [image] Фото документів
  fd7: string,
  // [image] Фото документів
  fd8: string,
  // [image] Фото документів
  fd9: string,
  // [image] Фото документів
  fd10: string,
  // [select_one] Тип об'єкту
  __018: undefined | Opt<'__018'>,
  // [select_one] Ви були тимчасово переміщені і повернулися до свого приміщення?
  _: undefined | Opt<'physical_family'>,
  // [select_one] Скільки часу пройшло з вашого повернення
  __019: undefined | Opt<'__019'>,
  // [select_one] Чи є ви законним власником приміщення
  __001: undefined | Opt<'physical_family'>,
  // [image] Копія свідоцтва про право власності, договір купівлі-продажу, свідоцтво про право на спадщину (1)
  kspp1: string,
  // [image] Копія свідоцтва про право власності, договір купівлі-продажу, свідоцтво про право на спадщину (2)
  kspp2: string,
  // [image] Копія свідоцтва про право власності, договір купівлі-продажу, свідоцтво про право на спадщину (3)
  kspp3: string,
  // [select_one] Чи є у вас договір оренди з орендодавцем
  __002: undefined | Opt<'physical_family'>,
  // [image] Копія договору оренди (1)
  kdo1: string,
  // [image] Копія договору оренди (2)
  kdo2: string,
  // [text] Ім'я, адреса, контакт (телефон/пошта) законного орендаря
  __021: string | undefined,
  // [select_one] Чи є довіреність представляти власника
  __010: undefined | Opt<'physical_family'>,
  // [image] Копія довіреності (1)
  kdov1: string,
  // [image] Копія довіреності (2)
  kdov2: string,
  // [text] Ім'я, адреса, контакт (телефон/пошта) законного орендаря
  __020: string | undefined,
  // [select_one] Отримували ви допомогу від іншої ГО за останні 3 місяці
  ovd: undefined | Opt<'physical_family'>,
  // [text] Коментар стосовно допомоги від іншої ГО за останні 3 місяці
  kovd: string | undefined,
  // [integer] Кількість людей в сім'ї, без  врахування заявника(ВПО)
  __022: number | undefined,
  // [select_one] Стать першого члена сім'ї(ВПО)
  sph1: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) першого члена сім'ї(ВПО)
  vph1: number | undefined,
  // [select_one] Стать другого члена сім'ї(ВПО)
  sph2: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) другого члена сім'ї(ВПО)
  vph2: number | undefined,
  // [select_one] Стать третього члена сім'ї(ВПО)
  sph3: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) третього члена сім'ї(ВПО)
  vph3: number | undefined,
  // [select_one] Стать четвертого члена сім'ї(ВПО)
  sph4: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) четвертого члена сім'ї(ВПО)
  vph4: number | undefined,
  // [select_one] Стать п'ятого члена сім'ї(ВПО)
  sph5: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) п'ятого члена сім'ї(ВПО)
  vph5: number | undefined,
  // [select_one] Стать шостого члена сім'ї(ВПО)
  sph6: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) шостого члена сім'ї(ВПО)
  vph6: number | undefined,
  // [select_one] Стать сьомого члена сім'ї(ВПО)
  sph7: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) сьомого члена сім'ї(ВПО)
  vph7: number | undefined,
  // [select_one] Стать восьмого члена сім'ї(ВПО)
  sph8: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) восьмого члена сім'ї(ВПО)
  vph8: number | undefined,
  // [select_one] Стать дев'ятого члена сім'ї(ВПО)
  sph9: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) дев'ятого члена сім'ї(ВПО)
  vph9: number | undefined,
  // [select_one] Стать деcятого члена сім'ї(ВПО)
  sph10: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) деcятого члена сім'ї(ВПО)
  vph10: number | undefined,
  // [integer] Кількість людей в сім'ї, без  врахування заявника(що постраждали від конфлікту)
  __026: number | undefined,
  // [select_one] Стать першого члена сім'ї(що постраждали від конфлікту)
  sph1k: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) першого члена сім'ї(що постраждали від конфлікту)
  vph1k: number | undefined,
  // [select_one] Стать другого члена сім'ї(що постраждали від конфлікту)
  sph2k: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) другого члена сім'ї(що постраждали від конфлікту)
  vph2k: number | undefined,
  // [select_one] Стать третього члена сім'ї(що постраждали від конфлікту)
  sph3k: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) третього члена сім'ї(що постраждали від конфлікту)
  vph3k: number | undefined,
  // [select_one] Стать четвертого члена сім'ї(що постраждали від конфлікту)
  sph4k: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) четвертого члена сім'ї(що постраждали від конфлікту)
  vph4k: number | undefined,
  // [select_one] Стать п'ятого члена сім'ї(що постраждали від конфлікту)
  sph5k: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) п'ятого члена сім'ї(що постраждали від конфлікту)
  vph5k: number | undefined,
  // [select_one] Стать шостого члена сім'ї(що постраждали від конфлікту)
  sph6k: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) шостого члена сім'ї(що постраждали від конфлікту)
  vph6k: number | undefined,
  // [select_one] Стать сьомого члена сім'ї(що постраждали від конфлікту)
  sph7k: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) сьомого члена сім'ї(що постраждали від конфлікту)
  vph7k: number | undefined,
  // [select_one] Стать восьмого члена сім'ї(що постраждали від конфлікту)
  sph8k: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) восьмого члена сім'ї(що постраждали від конфлікту)
  vph8k: number | undefined,
  // [select_one] Стать дев'ятого члена сім'ї(що постраждали від конфлікту)
  sph9k: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) дев'ятого члена сім'ї(що постраждали від конфлікту)
  vph9k: number | undefined,
  // [select_one] Стать десятого члена сім'ї(що постраждали від конфлікту)
  sph10k: undefined | Opt<'sph10k'>,
  // [integer] Вік (кількість повних років) десятого члена сім'ї(що постраждали від конфлікту)
  vph10k: number | undefined,
  // [select_multiple] Пов'язані з прихистком
  cs_sh: undefined | Opt<'cs_sh'>[],
  // [select_multiple] Соціально-економічні
  cs_se: undefined | Opt<'cs_se'>[],
  // [select_multiple] Вразливості
  cs_val: undefined | Opt<'cs_val'>[],
  cal_sh: string,
  cal_se: string,
  cal_val: string,
  cal_tol: string,
  // [note] Кількість критеріїв: ${cal_tol}
  ncal: string,
  // [select_one] У домогосподарства є ризики, пов`язані з соціально-правовим захистом
  cs_prot: undefined | Opt<'physical_family'>,
  // [select_one] Ви надаєте свою згоду для передачі інформації іншим відділам
  cs_prye: undefined | Opt<'physical_family'>,
  // [select_one] Чи є фізично постраждалі в сім’ї в наслідок ракетного удару 19 серпня?
  physical_family: undefined | Opt<'physical_family'>,
  // [select_one] В який формі вам більш приємливо отримати допомогу (на ланий час розглядається на дання коштів на ремонт)?
  form_help: undefined | Opt<'form_help'>,
  // [date] Дата заповнення анкети
  __024: Date | undefined,
  // [text] Коментарі
  __025: string | undefined,
  // [geopoint] Мітка геолокації
  __029: string,
}