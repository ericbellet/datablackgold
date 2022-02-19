FROM python

WORKDIR /backend

RUN pip install -U pip
# Poetry installation
RUN wget https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py
RUN python get-poetry.py
ENV PATH="/root/.poetry/bin:${PATH}"

# Poetry dependencies
COPY pyproject.toml  /backend/pyproject.toml
COPY poetry.lock  /backend/poetry.lock

#Hack to avoid distutils error TODO: Try removing manually from 'site-packages'
RUN pip install entrypoints==0.3 --ignore-installed
RUN poetry config virtualenvs.create false
RUN poetry install --no-interaction -v

RUN pip install gmplot
COPY . /backend

WORKDIR    /backend
CMD        ["python"]