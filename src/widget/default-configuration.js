
export const defaultConfiguration = {
    titleClosed: '立即諮詢!',
    titleOpen: 'SYM線上專人客服!',
    closedStyle: 'chat', // button or chat
    closedChatAvatarUrl: '', // only used if closedStyle is set to 'chat'
    cookieExpiration: 1, // in days. Once opened, closed chat title will be shown as button (when closedStyle is set to 'chat')
    introMessage: 'HI!有什麼可以幫你的?'+
    '(現有用戶請提供帳號與即時PIN碼)',
    autoResponse: '請稍後線上客服非24小時(Telegram客服同步)',
    autoNoResponse: '現在沒有客服在線!' +
    '如購買前問題或是請求測試IP請留下姓名與EMAIL/手機號碼',
    placeholderText: '請輸入文字...',
    displayMessageTime: true,
    displayBanner: true,
    mainColor: '#1f8ceb',
    alwaysUseFloatingButton: false,
    desktopHeight: 500,
    desktopWidth: 370,
    visitorPronoun: 'You'
};
