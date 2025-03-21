const defaultOptions = {
    weekday: 'long',    
    day: 'numeric',     
    month: 'long',      
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
}

export const formatDateToCustom = (date, options=defaultOptions) => {
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
}
