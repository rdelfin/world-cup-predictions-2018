FROM ubuntu:xenial
WORKDIR /app
RUN apt-get update && \
    apt-get install --no-install-recommends -y software-properties-common python-software-properties && \
    add-apt-repository ppa:deadsnakes/ppa && \
    apt-get update && \
    apt-get install -y --no-install-recommends python3.6 libmysqlclient-dev python3.6-dev build-essential curl && \
    curl -k https://bootstrap.pypa.io/get-pip.py | python3.6 && \
    rm -rf /var/lib/apt/lists/* && \
    update-alternatives --install /usr/bin/python python /usr/bin/python2.7 1 && \
    update-alternatives --install /usr/bin/python python /usr/bin/python3.6 2
ADD ./requirements.txt /app/requirements.txt
RUN pip install -r ./requirements.txt
ADD . /app
ENV DJANGO_SETTINGS_MODULE=world_cup_predictions.settings
EXPOSE 8000