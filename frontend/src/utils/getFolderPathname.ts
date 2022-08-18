function getFolderPathname(location: string) {

    const parsedPathname = location.split('/');

    switch (parsedPathname.length) {
        /**
         * папка зашли внутри
         */
        case 4:
            return parsedPathname[parsedPathname.length - 1]
        /**
         * просто компонент папок
         */
        case 2:
            return ''

        default:
            return ''

    }

}


export default getFolderPathname;
