class SessionsController < ApplicationController
    include CurrentUserConcern

# Makes Post request

    def create
        # Allows for frontend to send a wrapped up user object
        user = User.find_by(email: params["user"]["email"])
        # use the given authenticate method provided by rails
        .try(:authenticate, params["user"]["password"])

        if user
            # moment of logged in
            session[:user_id] = user.id 
            render json: {
                status: :created, 
                logged_in: true,
                user: user
            }
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def logged_in
        if @current_user
            render json: {
                logged_in: true,
                user: @current_user
            }
        else
            render json: {
                logged_in: false
            }
    end

    def logout
        reset_session
        render json: { status: 200, logged_out: true }
    end

end
