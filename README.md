API Performans İzleme & Zamanlanmış Görev

Genel Bakış

Bu proje, API performansını izlemek ve analiz etmek için Aspect-Oriented Programming (AOP) kullanmaktadır. API istek ve yanıtlarını takip ederek çalışma sürelerini kaydeder. Ayrıca, Zamanlanmış Görev mekanizması kullanılarak büyük miktardaki log verilerinin periyodik olarak temizlenmesi sağlanmaktadır.

1. Aspect-Oriented Programming (AOP)

Neden AOP?

Bu projede AOP kullanılarak:

Gelen API istekleri ve dönen yanıtlar kaydedilir.

Performans analizi için çalışma süresi ölçülür.

İlgili metrikler bir veritabanına kaydedilir.

AOP sayesinde özel anotasyonlar oluşturularak metod bazlı işlemler gerçekleştirilebilir ve izleme işlemleri daha verimli hale getirilebilir.

Örnek Kullanım Senaryosu

Dış servislerden veri çeken API'lerde, giriş-çıkış süreleri kaydedilerek performans analizi yapılır. Böylece, çalışma süreleri ve sistem davranışları etkin bir şekilde takip edilir.

2. Zamanlanmış Görev Mekanizması

Amaç

Zamanlanmış Görev mekanizması, API çağrılarından kaynaklanan log verilerini belirli aralıklarla temizlemek için tasarlanmıştır.

Mevcut Durum ve Önerilen Çözüm

Şu anda log temizleme işlemi manuel olarak /catch/log/clear API endpoint’i üzerinden yapılmaktadır.

Bu süreci otomatik hale getirmek için bir Zamanlanmış Görev (Cron Job) önerilmektedir. Bu görev:

Belirli aralıklarla (örneğin ayda bir) çalıştırılacaktır.

Log temizleme işlemini manuel müdahale olmadan gerçekleştirecektir.

