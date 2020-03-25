$path = $env:TEMP + '\' + (Get-Random)

ng build --output-path $path --prod --base-href https://kexplx.github.io/ng-crimeview/

git checkout gh-pages

Remove-Item *.js
Remove-Item *.css
xcopy /s /Y $path .

Remove-Item -Confirm:$false -Recurse $path

git add .
git add .
git commit -m"adds new webpack bundle"
git push
git checkout release
