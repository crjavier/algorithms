function mergeKeysWithTranslatedTerm(diccionary, terms) {
    translatedTerms = {};
    Object.keys(diccionary).map(function (key) { Object.assign(translatedTerms, { [key]: terms[diccionary[key]] }); });
    return translatedTerms;
}

function translateTerms() {

    new Promise(function (resolve, reject) {
        if (userSession.language === 'en-US' || !['en-AU', 'fr-FR', 'es-MX'].includes(userSession.language)) {
            resolve();
        }

        var body = {
            TargetLanguage: userSession.language,
            Terms: Object.values(getTermsToTranslate())
        };

        fakeCallToTranslate(body)
            .then(function (translatedTerms) {
                resolve(translatedTerms);
            })
            .catch(function (err) {
                reject(err);
            });
    })

        .then(function (translated) { // either way can be undefined or array of translated words
            // save words either way translated or english version so later in the application can use them.

            var dic = translated === undefined ? getTermsToTranslate() : mergeKeysWithTranslatedTerm(getTermsToTranslate(), translated);

            // save dic to storage.

        })

        .catch(function (err) {
            console.log('there was an error', err);
        });
}

function getMaxLengthOfKeys(myobj) {
    let maxLength = 0;
    let maxLengthKey = '';
    Object.keys(myobj).map(key => {
        if (key.length > maxLength) {
            maxLength = key.length;
            maxLengthKey = key;
        }
    });
    return [maxLength, maxLengthKey];
}

function printDuplicatedKeyInJson(myobj) {
    const existing = new Set();

    Object.keys(myobj).map(key => {
        if (existing.has(key)) {
            console.log(key);
        } else {
            existing.add(key);
        }
    });
}

function blobToBase64(blob) {
    var deferred = $q.defer();
    var reader = new FileReader();
    reader.readAsArrayBuffer(blob);
    reader.onloadend = function () {
        deferred.resolve(reader.result);
    };
    return deferred.promise;
}

function textTransform(text, argms) {
    for (let i = 0; i < argms.length; i++) {
        let regex = new RegExp('\\{' + i + '\\}');
        text = text.replace(regex, argms[i]);
    }
    return text;
}

function sentenceToCamelCase(sentences) {
    const newObj = {};
    const spa = {};

    for (let i = 0; i < sentences.length; i++) {
        const modify = sentences[i];
        let newString = '', flag = false;

        const lower = modify.toLowerCase();

        for (let letter of lower) {
            const charOfLetter = letter.charCodeAt(0);

            if (charOfLetter >= 97 && charOfLetter <= 122) {
                if (flag) {
                    newString += letter.toUpperCase();
                    flag = false;
                } else {
                    newString += letter;
                }
            }
            if (charOfLetter === 32) {
                flag = true;
            }
        }

        newObj[newString] = modify;
        if (spanish[i] != undefined) {
            spa[newString] = spanish[i];
        }

    }
}

function keyToValueAndValueToKey(myobj) {
    const newobj = {};
    Object.keys(myobj).map(key => {
        newobj[myobj[key]] = key;
    });
    return newobj;
}

function brandNewFunction(englishSpanish, englishKey) {
    const englishOk = {}, SpanishOk = {}, missingOnes = {};

    Object.keys(englishSpanish).map(englishVal => {
        bothKey = englishKey[englishVal]
        if (bothKey != undefined) {
            englishOk[bothKey] = englishVal;
            SpanishOk[bothKey] = englishSpanish[englishVal];
        } else {
            missingOnes[englishVal] = englishSpanish[englishVal];
        }
    });

    console.log(JSON.stringify(englishOk));
    console.log(JSON.stringify(SpanishOk));
    console.log(JSON.stringify(missingOnes));
}

module.exports = {
    getMaxLengthOfKeys,
    printDuplicatedKeyInJson,
    blobToBase64,
    textTransform,
    sentenceToCamelCase,
    brandNewFunction,
    keyToValueAndValueToKey,
};
