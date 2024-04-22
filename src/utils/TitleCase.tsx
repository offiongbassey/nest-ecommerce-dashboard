export const TitleCase = (name: string) => {
    return name?.toLocaleLowerCase()?.split(' ').map(function (text) {
        return (text?.charAt(0).toUpperCase() + text?.slice(1));
    }).join(' ');
}