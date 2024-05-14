export const API_BASE_URL =
  process.env.REACT_APP_ENV == 'production'
    ? 'https://bcom-services.pierofcloudtech.com/api'
    : process.env.REACT_APP_ENV == 'local'
      ? 'https://bcom-services.pierofcloudtech.com/api'
      : 'https://bcom-services.pierofcloudtech.com/api';
export const ACCESS_TOKEN_NAME = 'x-auth-token';

// export default {
//   facebook: "", //Facebook App Id
//   linkedin: "", //Linkedin app id
//   google  : "846832770923-nq1asqrnbgordka380aee3fu0th7kk7l.apps.googleusercontent.com" //Google client id  (7687687687-nq1asqrnbgordksqerer23dewqqe.apps.googleusercontent.com)
// }
