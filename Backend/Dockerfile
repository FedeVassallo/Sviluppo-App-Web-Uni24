# Usa un'immagine di base con PHP e Composer
FROM php:8.1-fpm

# Imposta la directory di lavoro
WORKDIR /var/www

# Installa le dipendenze di sistema
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl

# Installa le estensioni PHP necessarie
RUN docker-php-ext-install pdo pdo_mysql gd exif pcntl bcmath

# Installa Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copia i file di configurazione e installa le dipendenze
COPY . /var/www
RUN composer install

# Copia il file di configurazione PHP personalizzato
COPY ./docker/php.ini /usr/local/etc/php/php.ini

# Imposta i permessi corretti per Laravel
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Espone la porta 9000 per PHP-FPM
EXPOSE 9000

# Comando di avvio per PHP-FPM
CMD ["php-fpm"]

