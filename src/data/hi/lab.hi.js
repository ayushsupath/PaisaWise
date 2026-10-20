export const hindiInstruments = {
  tbill: {
    name: 'Treasury Bill',
    issuer: 'भारत सरकार (RBI की नीलामी के ज़रिए)',
    purpose: 'सरकार की कम समय की उधारी और नकदी प्रबंधन',
    typicalMaturity: '91, 182, 364 दिन (जारी करने की प्रथा)',
    riskNote: 'सरकारी कर्ज़ का जोखिम माना जाता है; फिर भी दरें और कीमतें बदल सकती हैं।',
    retailNote: 'यह मुख्य रूप से संस्थागत बाज़ार है; यहाँ सीधे ट्रेडिंग नहीं होती।',
    fictionalExample: { label: 'काल्पनिक 91-दिन का उदाहरण' },
  },
  cp: {
    name: 'Commercial Paper',
    issuer: 'योग्य और अच्छी रेटिंग वाली कंपनियाँ / वित्तीय संस्थाएँ',
    purpose: 'कम समय के कामकाजी खर्च और कंपनी की फंडिंग',
    typicalMaturity: 'एक साल तक (लागू RBI दिशा-निर्देशों के भीतर)',
    riskNote: 'बिना जमानत; जारी करने वाली कंपनी की साख अहम है।',
    retailNote: 'मुख्य रूप से संस्थागत निवेशक; छात्र की बचत का विकल्प नहीं।',
    fictionalExample: { label: 'काल्पनिक CP जारी करना' },
  },
  cd: {
    name: 'Certificate of Deposit',
    issuer: 'Scheduled commercial bank',
    purpose: 'बैंक के लिए कम/मध्यम अवधि की बड़ी फंडिंग',
    typicalMaturity: 'RBI नियमों के अनुसार अवधि',
    riskNote: 'बैंक की साख का जोखिम; खुदरा जमा से शर्तें अलग हो सकती हैं।',
    retailNote: 'बड़ी रकम वाला साधन; शर्तें पढ़ना ज़रूरी है।',
    fictionalExample: { label: 'काल्पनिक बैंक CD' },
  },
  call: {
    name: 'Call Money',
    issuer: 'लागू नहीं — बैंकों के बीच उधार और देना',
    purpose: 'बैंकों के बीच रात भर की नकदी का संतुलन',
    typicalMaturity: 'रात भर / माँग पर',
    riskNote: 'बैंकों के बीच; सिस्टम की नकदी के साथ दर तेज़ी से बदल सकती है।',
    retailNote: 'व्यक्तिगत छात्र के लिए उपलब्ध उत्पाद नहीं।',
    fictionalExample: { label: 'काल्पनिक रात भर का call' },
  },
  repo: {
    name: 'Repo Transaction',
    issuer: 'RBI और योग्य बैंक (नीतिगत काम)',
    purpose: 'सिक्योरिटी के बदले कम समय की नकदी देना या लेना',
    typicalMaturity: 'रात भर से लेकर लंबी LAF अवधि तक',
    riskNote: 'योग्य securities के बदले; यह खुदरा निवेश नहीं, नीति का साधन है।',
    retailNote: 'पाठ्यक्रम का कॉन्सेप्ट; निवेश ऐप का विकल्प नहीं।',
    fictionalExample: { label: 'काल्पनिक RBI repo' },
  },
}

export const hindiScenarios = {
  s1: {
    prompt: 'एक कंपनी के पास टैक्स भुगतान से पहले 45 दिन के लिए ₹2 करोड़ अतिरिक्त हैं। संस्थागत स्तर पर कम अवधि की रकम रखने के लिए किस साधन का अध्ययन उचित है?',
    options: ['लंबी अवधि का equity IPO', 'T-bill या Certificate of Deposit (योग्यता के अधीन)', 'रियल एस्टेट खरीदना', 'सिर्फ सोना'],
    explanation: 'कम अवधि के सरकारी या बैंक मनी मार्केट साधन अस्थायी संस्थागत रकम के पाठ्यक्रम वाले उदाहरण हैं—नियम और योग्यता लागू होते हैं।',
  },
  s2: {
    prompt: 'Call money की दर एक दिन के लिए तेज़ी से बढ़ी। इसका संभावित कारण क्या हो सकता है?',
    options: ['बैंकों में कुछ समय के लिए नकदी की कमी', 'SEBI ने सभी share रोक दिए', 'MCA ने सभी कंपनी बंद कर दी', 'छात्रों ने UPI इस्तेमाल करना हमेशा के लिए छोड़ दिया'],
    explanation: 'Call दरें बैंकों के बीच बहुत कम अवधि की नकदी की स्थिति दिखाती हैं।',
  },
  s3: {
    prompt: 'कौन-सा साधन बिना जमानत वाला कंपनी का कम अवधि का कागज़ है?',
    options: ['Treasury Bill', 'Commercial Paper', 'नोट', 'जमा बीमा प्रमाणपत्र'],
    explanation: 'CP कंपनी की बिना जमानत वाली कम अवधि की उधारी है।',
  },
}

export function getHindiInstrument(id) {
  return hindiInstruments[id]
}

export function getHindiScenario(id) {
  return hindiScenarios[id]
}
