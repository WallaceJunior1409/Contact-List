const masks = {
    phone(value) {
        const newPhone = value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1');
        //console.log(newPhone);
        return newPhone;
    }
}

export default { masks };