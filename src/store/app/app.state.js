export const appState = {
    currentCurrency: '',
    currentCurrencySymbol: '',
    currentConversionRate: 0,

    getAppSettingsLoading: false,
    getAppSettingsLoaded: false,
    getAppSettingsFail: false,
    getAppSettingsData: null,

    getCurrencyListLoading: false,
    getCurrencyListLoaded: false,
    getCurrencyListFail: false,
    getCurrencyListData: null,

    errorsState: [],
    criticalErrorData: null,

    notifacationPlayerId: null,

    getNotificationListLoading: false,
    getNotificationListLoaded: false,
    getNotificationListFail: false,
    getNotificationListData: null,
    notificationListTotal: 0,
    notificationListNotViewed: 0,

    getNotificationCustomListLoading: false,
    getNotificationCustomListLoaded: false,
    getNotificationCustomListFail: false,
    getNotificationCustomListData: null,

    addNotificationPlayerLoading: false,
    addNotificationPlayerLoaded: false,
    addNotificationPlayerFail: false,
    addNotificationPlayerData: false,

    setNotificationViewedLoading: false,
    setNotificationViewedLoaded: false,
    setNotificationViewedFail: false,
    setNotificationViewedData: false,

    getShopClusterLoading: false,
    getShopClusterLoaded: false,
    getShopClusterFail: false,
    getShopClusterData: null,

    getShopLanguagesLoading: false,
    getShopLanguagesLoaded: false,
    getShopLanguagesFail: false,
    getShopLanguagesData: null,
}