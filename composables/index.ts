export const useFormattedDate = (date: any) => {
    return new Date(date).toLocaleDateString('es', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export const useSocialLinks = [
    {
        url: 'https://twitter.com/brayamvalero',
        icon: 'fa-brands fa-twitter',
        title: 'Twitter',
    },
    {
        url: 'https://github.com/brayamvalero',
        icon: 'fa-brands fa-github',
        title: 'GitHub',
    },
    {
        url: 'https://www.linkedin.com/in/brayamvalerove/',
        icon: 'fa-brands fa-linkedin',
        title: 'LinkedIn',
    },
]

export const useHumanRedableDate = (date: any) => {
    const SECONDS_AGO = Math.round((Date.now() - Number(new Date(date))) / 1000)

    const MINUTE = 60
    const HOUR = MINUTE * 60
    const DAY = HOUR * 24
    const WEEK = DAY * 7
    const MONTH = DAY * 30
    const YEAR = DAY * 365

    let divisor, unit

    if (SECONDS_AGO < HOUR) {
        ;[divisor, unit] = [MINUTE, 'minuto']
    } else if (SECONDS_AGO < DAY) {
        ;[divisor, unit] = [HOUR, 'hora']
    } else if (SECONDS_AGO < WEEK) {
        ;[divisor, unit] = [DAY, 'día']
    } else if (SECONDS_AGO < MONTH) {
        ;[divisor, unit] = [WEEK, 'semana']
    } else if (SECONDS_AGO < YEAR) {
        ;[divisor, unit] = [MONTH, 'mes']
    } else {
        ;[divisor, unit] = [YEAR, 'año']
    }

    const count = Math.floor(SECONDS_AGO / divisor)
    return `hace ${count} ${unit}${count > 1 && unit === 'mes' ? 'es' : count > 1 ? 's' : ''}`
}

export const useDebounce = (fn: Function, delay: number) => {
    var timeoutID: any = null
    return function () {
        clearTimeout(timeoutID)
        var args = arguments
        var that = this
        timeoutID = setTimeout(function () {
            fn.apply(that, args)
        }, delay)
    }
}
