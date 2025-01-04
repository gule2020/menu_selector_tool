
document.addEventListener('DOMContentLoaded', () => {
    const menuType = document.getElementById('menu-type');
    const twoThreeCourse = document.getElementById('two-three-course');
    const buffet = document.getElementById('buffet');
    const previewList = document.getElementById('preview-list');

    const toggleVisibility = () => {
        if (menuType.value === 'two-three-course') {
            twoThreeCourse.classList.remove('hidden');
            buffet.classList.add('hidden');
        } else if (menuType.value === 'buffet') {
            twoThreeCourse.classList.add('hidden');
            buffet.classList.remove('hidden');
        } else {
            twoThreeCourse.classList.add('hidden');
            buffet.classList.add('hidden');
        }
    };

    menuType.addEventListener('change', toggleVisibility);
});
