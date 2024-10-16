//------------------------- Главная страница -------------------------//

[
    '.preloader', // бесполезный прелоадер
    '.center_sub', // меню слева
    '.pro', // промокод
    '.logol', // лого
    '.user-menu', // меню
    '.header > .container', // шапка
    '.version_fixed', // версия сайта
    '.name_sidebar .hello_sidebar', // приветствие
    '.block_open_cases', // розыгрыш
    '.today_visit_block', // блок кто зашел
    '.today_online', // задняя часть фотки кто онлайн
    '.users_chat_online .bx-chevron-down', // чат
    '.login_visit, .img_back_visit', // чат
    '.block_t_u, .heading_block, #new_news, .row_events', // новости
    '.bottom_stats', // стата в подвале
    '#servers + div', // топики на форуме
].forEach((selector) => $(selector).remove());

[
    '.search_user', // поиск пользователей
    '.head_block', // блок под меню
].forEach((selector) => $(selector).parent().remove());

// свое меню
$('.navTopItems').html(`
    <a class="navTopItem" href="/"><i class="bx bxs-group"></i>Главная</a>
    <a class="navTopItem" href="/gcms.php"><i class="bx bxs-group"></i>Форум</a>
    <a class="navTopItem" href="/store"><i class="bx bxs-store"></i>Магазин</a>
    <a class="navTopItem" href="/stats"><i class="bx bx-chart"></i>Стата</a>
    <a class="navTopItem" href="/banlist"><i class="bx bx-block"></i>Баны</a>
    <a class="navTopItem" href="/muts_v2"><i class="bx bx-block"></i>Муты</a>
    <a class="navTopItem" href="/chatlog"><i class="bx bx-list-ul"></i>Чатлог</a>
    <a class="navTopItem" href="/support"><i class="bx bxs-help-circle"></i>Тех. поддержка</a>
`);

// магия с переносом блока баланса туда-обратно (говнокод)
$('.flex_balance_mp').appendTo('.flex_mini_user');
$('.flex_mini_user').appendTo('.balance_mini_profile');
$('.button_plus_purse').parent().remove();
$('.flex_mini_user').appendTo('.info_navigation');
$('.balance_mini_profile').remove();
$('.flex_balance_mp').prependTo('.flex_mini_user');
$('.flex_balance_mp').replaceWith(
    '<a href="/purse" class="flex_balance_mp">' +
        $('.flex_balance_mp').html() +
        '</a>'
);

// блок онлайна
$('.flex_today').html('Онлайн');

// при наведение на игрока пишется ник + должность
setTimeout(() => {
    $('.last_online').each((i, $image) => {
        const $parent = $($image).parents('a')[0];
        const name = $image.getAttribute('alt');
        const rank = $parent.dataset.originalTitle;

        $parent.setAttribute('data-html', `true`);
        $parent.setAttribute('data-original-title', `${name} ${rank}`);
    });
}, 1000);

// фикс бага с онлайном, когда онлайн 0 - полоска заполнена
$('progress[value="0"]').each((i, $item) => ($item.value = 1));

//------------------------- Статистика -------------------------//

if (location.pathname == '/stats') {
    [
        '.blocked_block', // баннер под меню
        'span:contains("Игрок")', // Игрок
        '.table-adaptive .table-row > .row > div.with-icon > i', // иконка
    ].forEach((selector) => $(selector).remove());
    
    $('#search_stats + span').html('Поиск');
    
    $('.table-row > .row > div:nth-child(3)')
        .removeClass('col-lg-2')
        .addClass('col');
        
    $('.table-row > .row > div:nth-child(4)')
        .removeClass('col-lg-2')
        .addClass('col');
        
    $('.with-description').each((i, item) => {
        if (!item.querySelector('img') && item.childElementCount == 1) {
            item.classList.add('nick-only');
        }
    });
  
    // удаляем js скролл который написали путем клонирования
    const element = document.querySelector('.serversList');
    const clonedElement = element.cloneNode(true);
    element.parentNode.replaceChild(clonedElement, element);
}