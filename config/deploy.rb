set :application, "vldc.ru"
set :repository,  "git@github.com:fliptheweb/vldc.ru.git"
set :branch, "develop"
set :host, '107.170.57.93'
set :user, 'fliptheweb'
set :admin_runner, "www-data"

set :use_sudo, false
set :deploy_to, '/var/www/vldc.ru/www/'
set :node_file, 'app.js'
set :normalize_asset_timestamps, false
set :deploy_via, :remote_cache
ssh_options[:forward_agent] = true

# You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`
set :scm, :git

# role :web, "your web-server here"                          # Your HTTP server, Apache/etc
role :app, "fliptheweb@107.170.57.93"                          # This may be the same as your `Web` server
# role :db,  "your primary db-server here", :primary => true # This is where Rails migrations will run
# role :db,  "your slave db-server here"

# if you want to clean up old releases on each deploy uncomment this:
# after "deploy:restart", "deploy:cleanup"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
# namespace :deploy do
#   task :start do ; end
#   task :stop do ; end
#   task :restart, :roles => :app, :except => { :no_release => true } do
#     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
#   end
# end

# namespace :deploy do
#
#   desc "Stop Forever"
#   task :stop do
#     on roles(:app) do
#       execute "forever stopall; true"
#     end
#   end
#
#   desc "Start Forever"
#   task :start do
#     on roles(:app) do
#       execute "cd #{current_path} && sudo forever start app.js 80"
#     end
#   end
#
# end
namespace :deploy do
  desc "Start application with forever"
  task :start, :roles => :app, :except => { :no_release => true } do
    run "forever start #{current_path}/#{node_file}"
  end

  desc "Stop application"
  task :stop, :roles => :app, :except => { :no_release => true } do
    run "forever stop #{current_path}/#{node_file}"
  end
end
