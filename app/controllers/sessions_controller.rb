class SessionsController < ApplicationController
# Makes Post require
    def create
        # Allows for frontend to send a wrapped up user object
        user = User.find_by(email: params["user"]["email"])
        # use the given authenticate method provided by rails
        .try(:authenticate, params["user"]["password"])

        if user
            # moment of logged in
            session[:user_id] = user.user_id 
            render json: {
                status: created, 
                logged_in: true,
                user: user
            }
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end

end
