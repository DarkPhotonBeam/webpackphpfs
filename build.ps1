#Remove-Item '../../dist' -Recurse -Force -Confirm:$false
#New-Item -ItemType Directory -Force -Path '../../dist'
Remove-Item './production/*' -Recurse -Force -Confirm:$false
npm run build
Copy-Item -Path "C:\xampp\htdocs\roots\webpackphpfullstack\*" -Destination './production' -Recurse
#Copy-Item -Path (Get-Item -Path "C:\xampp\htdocs\roots\webpackphpfullstack\*" -Exclude ('node_modules')).FullName -Destination '../../dist' -Recurse -Force
Copy-Item -Path "./dist/*" -Destination './production' -Recurse
#Set-Location './production'
#yarn install --production=true
git add .
git commit -m "Production Commit"
git push origin master