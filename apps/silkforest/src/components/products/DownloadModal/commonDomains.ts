const commonEmailDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "aol.com",
  "mail.com",
  "zoho.com",
  "gmx.com",
  "yandex.com",
  "protonmail.com",
  "inbox.com",
  "fastmail.com",
  "hushmail.com",
  "tutanota.com",
  "mail.ru",
  "rediffmail.com",
  "lycos.com",
  "excite.com",
  "webmail.co.za",
  "mailinator.com",
  "myway.com",
  "rocketmail.com",
  "sbcglobal.net",
  "verizon.net",
  "att.net",
  "comcast.net",
  "charter.net",
  "bellsouth.net",
];

export const isCommonEmail = (email: string): boolean => {
  const domain = email.split("@")[1];
  return commonEmailDomains.includes(domain);
};
