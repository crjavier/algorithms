const isIPv4Address = (inputString) => (
    !(inputString
        .split('.')
        .filter(val => (!val || !+val && val != 0 || val < 0 || val > 255 || val === 00))
        .length > 0
    )
    && inputString.split('.').length === 4);