
export const useFormattedDate = (date: any) => {
    return new Date(date).toLocaleDateString('es', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
};


