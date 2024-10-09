conts getCCS=(VARIAVEL) => {
    cont bodyStyles = getComputedStyle(document.body)
    returm bodyStyles.getPropertyvalue(VARIAVEL)
}

cont tickCofig = {
    family:getCCS('--font') ,
       size :16,
    color:getCCS('--primary-color')
}

export {getCCS, tickCofig}