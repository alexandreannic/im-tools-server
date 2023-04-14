#ftps://waws-prod-db3-195.ftp.azurewebsites.windows.net/site/wwwroot
# drc-imaa-ukr-tools-api
#username: drc-imaa-ukr-tools-api\$drc-imaa-ukr-tools-api
#password: R8LSo8wxpat8lplxosjzn6WaYjDoT59MJx6xseixPwkJeuk6hhj8PaobAdWX
#
#username:drc-imaa-ukr-tools\$drc-imaa-ukr-tools
#password:rJxEsj09zN3nqknoS9GpxBM1W4vykcqXoZrCNzGungbgKspNMqSePuno4EAY

#lftp -c "open -u drc-imaa-ukr-tools-api\$drc-imaa-ukr-tools-api,R8LSo8wxpat8lplxosjzn6WaYjDoT59MJx6xseixPwkJeuk6hhj8PaobAdWX ftps://waws-prod-db3-195.ftp.azurewebsites.windows.net; put -O /site/wwwroot .*"

#lftp ftps://drc-imaa-ukr-tools-api\$drc-imaa-ukr-tools-api:R8LSo8wxpat8lplxosjzn6WaYjDoT59MJx6xseixPwkJeuk6hhj8PaobAdWX@waws-prod-db3-195.ftp.azurewebsites.windows.net/site/wwwroot
#lftp ftps://waws-prod-db3-195.ftp.azurewebsites.windows.net/site/wwwroot -u drc-imaa-ukr-tools-api\$drc-imaa-ukr-tools-api

#lftp ftps://waws-prod-db3-195.ftp.azurewebsites.windows.net/site/wwwroot -u drc-imaa-ukr-tools-api\$drc-imaa-ukr-tools-api

#lftp -u drc-imaa-ukr-tools-api\$drc-imaa-ukr-tools-api ftps://waws-prod-db3-195.ftp.azurewebsites.windows.net/site/wwwroot
#Password: 
#cd ok, cwd=/site/wwwroot                                                                                                                               
#lftp -u 'drc-imaa-ukr-tools\$drc-imaa-ukr-tools,rJxEsj09zN3nqknoS9GpxBM1W4vykcqXoZrCNzGungbgKspNMqSePuno4EAY' ftps://waws-prod-db3-195.ftp.azurewebsites.windows.net/site/wwwroot
#lftp -u 'drc-imaa-ukr-tools-api\$drc-imaa-ukr-tools-api,R8LSo8wxpat8lplxosjzn6WaYjDoT59MJx6xseixPwkJeuk6hhj8PaobAdWX' ftps://waws-prod-db3-195.ftp.azurewebsites.windows.net/site/wwwroot
#ssh 'drc-imaa-ukr-tools-api\$drc-imaa-ukr-tools-api':R8LSo8wxpat8lplxosjzn6WaYjDoT59MJx6xseixPwkJeuk6hhj8PaobAdWX@https://drc-imaa-ukr-tools-api.azurewebsites.net/

az webapp up --sku F1 --name drc-imaa-ukr-tools-api
