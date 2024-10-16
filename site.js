// удаляем даунский прелоадер
$('.preloader').remove();

// удаляем меню слева
$('.center_sub').remove();

// удаляем найти пользователя
$('.search_user').parent().remove();

// удаляем промокод
$('.pro').remove();

// удаляем лого говна
$('.logol').remove();

// удаляем дубль меню
$('.user-menu').remove();

// шапка пустая - удаляем
$('.header > .container').remove();

// мусор
$('.version_fixed').remove();

// свое меню
$('.navTopItems').html(`
        <a class="navTopItem" href="/"><i class="bx bxs-group"></i>Главная</a>
    <a class="navTopItem" href="/gcms.php"><i class="bx bxs-group"></i>Форум</a>
    <a class="navTopItem" href="/store"><i class="bx bxs-store"></i>Магазин</a>
    <a class="navTopItem" href="/stats"><i class="bx bx-chart"></i>Стата</a>
    <a class="navTopItem" href="/banlist"><i class="bx bx-block"></i>Баны</a>
    <a class="navTopItem" href="/muts_v2"><i class="bx bx-block"></i>Муты</a>
    <a class="navTopItem" href="/chatlog"><i class="bx bx-list-ul"></i>Чатлог</a>
    <a class="navTopItem" href="/support"><i class="bx bxs-help-circle"></i>Тех. поддержка</a>`);

// блок под меню нахуй
$('.head_block').parent().remove();

// приветствие
$('.name_sidebar .hello_sidebar').remove();

// розыгрышы для даунов
$('.block_open_cases').remove();

// разве не похуй кто заходил?
$('.today_visit_block').remove();

$('.flex_balance_mp').appendTo('.flex_mini_user');
$('.flex_mini_user').appendTo('.balance_mini_profile');
$('.button_plus_purse').parent().remove();
$('.flex_mini_user').appendTo('.info_navigation');
$('.balance_mini_profile').remove();
$('.flex_balance_mp').prependTo('.flex_mini_user');

$('.flex_balance_mp').replaceWith('<a href="/purse" class="flex_balance_mp">' + $('.flex_balance_mp').html() + '</a>');

$('.flex_today').html('Онлайн');
$('.today_online').remove();

$('.users_chat_online .bx-chevron-down').remove();
$('.login_visit, .img_back_visit').remove();

setTimeout(() => {
    $('.last_online').each((i, $image) => {
        const $parent = $($image).parents('a')[0];
        const name = $image.getAttribute('alt');
        const rank = $parent.dataset.originalTitle;
        
        $parent.setAttribute('data-html', `true`);
        $parent.setAttribute('data-original-title', `${name} ${rank}`);
    })
}, 1000);

$('.block_t_u, .heading_block, #new_news, .row_events').remove();

$('#servers + div').remove();

$('progress[value="0"]').each((i, $item) => $item.value = 1);
