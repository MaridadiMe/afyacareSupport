export class ApiConstants {
    private static readonly hostUrl: String = localStorage.getItem('host') ? ("https://" + localStorage.getItem('host')) : "";
    
    public static readonly restws: String = ApiConstants.hostUrl + "/openmrs/ws/rest";
    public static readonly bahmniHome: String = ApiConstants.hostUrl + "/bahmni/home";
    public static readonly restws_v1: String = ApiConstants.hostUrl + "/openmrs/ws/rest/v1";
    public static readonly bahmni_core: String = ApiConstants.restws_v1 + "/bahmnicore";
    public static readonly sql_url: string = ApiConstants.bahmni_core + "/sql";
    public static readonly billing_url: String = ApiConstants.restws_v1 + "/billing";
    public static readonly management_url: String = ApiConstants.restws_v1 + "/api/management";
    public static readonly system_settings_url: string = ApiConstants.restws_v1 + "/systemsetting";
}
