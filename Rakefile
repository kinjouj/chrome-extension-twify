begin
  require "crxmake"
rescue LoadError
  warn "gem install crxmake"
  exit 1
end

task :package do
  CrxMake.make({ :ex_dir => 'ext', :crx_output => "twify.crx" })
end
