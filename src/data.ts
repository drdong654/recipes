export type Ingredient = { id: string; name: string; amount: number; unit: string; category: 'salad' | 'sauce'; icon: string }
export const ingredients: Ingredient[] = [
  {id:'romaine',name:'Салат романо',amount:1,unit:'кочан',category:'salad',icon:'🥬'},
  {id:'chicken',name:'Куриное филе',amount:300,unit:'г',category:'salad',icon:'🍗'},
  {id:'bread',name:'Белый хлеб',amount:120,unit:'г',category:'salad',icon:'🍞'},
  {id:'oil',name:'Оливковое масло',amount:2,unit:'ст. л.',category:'salad',icon:'🫒'},
  {id:'parmesan',name:'Пармезан',amount:50,unit:'г',category:'salad',icon:'🧀'},
  {id:'mayo',name:'Майонез',amount:4,unit:'ст. л.',category:'sauce',icon:'🥣'},
  {id:'anchovy',name:'Анчоусы',amount:3,unit:'шт.',category:'sauce',icon:'🐟'},
  {id:'garlic',name:'Чеснок',amount:1,unit:'зубчик',category:'sauce',icon:'🧄'},
  {id:'mustard',name:'Дижонская горчица',amount:1,unit:'ч. л.',category:'sauce',icon:'🟡'},
  {id:'lemon',name:'Лимонный сок',amount:1,unit:'ст. л.',category:'sauce',icon:'🍋'},
]
export const steps = [
 {title:'Подготовка', eyebrow:'Начнём с основы', icon:'🥬', duration:0, tip:'Сухие листья лучше удерживают соус и остаются хрустящими.', instruction:'Промойте листья романо в прохладной воде. Тщательно обсушите, крупно порвите руками и охладите. Подготовьте остальные продукты и разогрейте духовку до 180 °C.', tasks:['Промыть романо','Обсушить листья','Подготовить продукты','Разогреть духовку']},
 {title:'Курица', eyebrow:'Тепло и аромат', icon:'🍗', duration:8, tip:'Готовность проверяйте термометром: в центре филе должно быть не менее 74 °C.', instruction:'Приправьте филе солью и перцем. Обжарьте на среднем огне до золотистой корочки с двух сторон. Проверьте внутреннюю температуру, дайте мясу отдохнуть 5 минут и нарежьте ломтиками.', tasks:['Приправить филе','Обжарить с двух сторон','Проверить 74 °C внутри','Дать отдохнуть и нарезать']},
 {title:'Крутоны', eyebrow:'Хрустящая деталь', icon:'🍞', duration:10, tip:'Разложите хлеб в один слой, чтобы кусочки подрумянились равномерно.', instruction:'Нарежьте белый хлеб кубиками около 2 см. Сбрызните оливковым маслом, перемешайте и запекайте при 180 °C до золотистого цвета. Остудите перед сборкой.', tasks:['Нарезать хлеб','Добавить масло','Запечь до золотистого цвета','Остудить']},
 {title:'Соус', eyebrow:'Сердце рецепта', icon:'🥣', duration:0, tip:'Если соус густой, добавьте немного холодной воды по чайной ложке.', instruction:'Измельчите чеснок и анчоусы до пасты. Смешайте с майонезом, горчицей и лимонным соком. Добавьте мелко натёртый пармезан и доведите соус до нужной консистенции.', tasks:['Измельчить чеснок и анчоусы','Смешать основу','Добавить пармезан','Отрегулировать густоту']},
 {title:'Сборка', eyebrow:'Последний штрих', icon:'🥗', duration:0, tip:'Собирайте салат непосредственно перед подачей, чтобы крутоны не размокли.', instruction:'Соедините романо с частью соуса. Выложите ломтики курицы, добавьте сухарики и оставшийся соус. Украсьте стружкой пармезана и подавайте сразу.', tasks:['Смешать романо с соусом','Добавить курицу','Добавить сухарики','Украсить пармезаном']},
]
export function quantity(amount:number, portions:number):string { const n=amount*portions/2; if (Number.isInteger(n)) return String(n); const whole=Math.floor(n), fraction=n-whole; const fractions:[[number,string]] | [number,string][]=[[.25,'¼'],[.5,'½'],[.75,'¾']]; const match=fractions.find(([v])=>Math.abs(fraction-v)<.001); return match ? `${whole||''}${match[1]}` : String(Number(n.toFixed(1))) }
