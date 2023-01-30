const ApiError = require('../exceptions/ApiError');
const tokenService = require('../service/TokenService');

module.exports = function (req, res, next) {
    try {
        const authorizationHeader = req.headers.autorization;
        if (!authorizationHeader) {
            ; return next(ApiError.UnauthorizedError());
        }
        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return next(ApiError.UnauthorizedError());
        };
        const userData = tokenService.validateAccessToken(accessToken);
        if (!userData) {
            return next(ApiError.UnauthorizedError());
        };
        // req.user = userData;
        req.userId = userData.id
        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
};