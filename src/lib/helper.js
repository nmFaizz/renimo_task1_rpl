const defaultOptions = {
    weekday: 'long',    
    day: 'numeric',     
    month: 'long',      
    year: 'numeric'
}

export const formatDateToCustom = (date, options=defaultOptions) => {
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
}
