export const validateEmail = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
);

export const validatePassword = new RegExp(
    '^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$'
);

export function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '').replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    return cpf;
};
export function formatPhoneNumber(phoneNumber) {
    const regex = /^(\d{2})(\d{5})(\d{4})$/;
    const onlyNumbers = phoneNumber.replace(/\D/g, ''); // Remove todos os caracteres não numéricos da string
    const formattedNumber = onlyNumbers.replace(regex, '($1)$2-$3');
    return formattedNumber;
};

export const validateName = new RegExp(
    "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
);
export const formateDate = /([A-Z][a-z]{2})\s([A-Z][a-z]{2})\s(\d{2})\s(\d{4})\s(\d{2}):(\d{2}):(\d{2})\s[A-Z]/g;
