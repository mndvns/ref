PREFIX ?= /usr/local

install: bin/raf
	@cp -p $< $(PREFIX)/$<

uninstall:
	rm -f $(PREFIX)/bin/raf

.PHONY: install uninstall
