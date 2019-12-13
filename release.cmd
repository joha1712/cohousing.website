@echo off
setlocal
:PROMPT
SET /P AREYOUSURE=Do you want to release master (Y/[N])?
IF /I "%AREYOUSURE%" NEQ "Y" GOTO END

git checkout master
git pull --rebase
git checkout release
git pull --rebase
git pull origin release
git push
git checkout master 

:END
endlocal


