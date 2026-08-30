import Link from 'next/link';
import Image from "next/image";
import { siteConfig } from '@/config/site';
import {
  EditDocumentIcon,
  MenuBookIcon,
  StyleIcon,
  QuizIcon,
  ArticleIcon,
  PublicIcon,
  DevicesIcon,
  HeartIcon,
  PolicyIcon,
  GavelIcon,
  ArrowOutwardIcon,
} from '@/components/Icons';

export function Footer() {
  return (
    <footer className="border-t border-border-light dark:border-border-dark py-16 px-6 bg-surface-light dark:bg-surface-dark transition-colors">
      <div className="container-app">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 sm:col-span-2 flex flex-col gap-6">
            <div className="flex flex-col items-start gap-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent-blue rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-background-light dark:bg-background-dark p-2 rounded-lg hairline-border-light dark:hairline-border flex items-center justify-center">
                  <Image className="rounded-full" src="/logo.png" alt={`${siteConfig.name} Logo`} width={200} height={200} />
                </div>
              </div>
              <div className="flex flex-col items-start group">
                <h2 className="text-xl sm:text-2xl font-black tracking-wider text-text-light dark:text-text-dark">
                  GITHUB PROFILE
                </h2>
                <span className="text-md font-bold text-primary uppercase tracking-[0.2em] leading-none">
                  README GENERATOR
                </span>
              </div>
            </div>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-xs leading-relaxed text-sm">
              The ultimate tool for developers to create stunning GitHub profile READMEs in seconds.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-text-light dark:text-text-dark uppercase tracking-wider text-xs">
              Other Pages
            </h4>
            <nav className="flex flex-col gap-3 text-sm">
              <Link className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors flex items-center gap-2" href="/generator">
                <EditDocumentIcon size={14} className="opacity-70" /> Generator
              </Link>
              <Link className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors flex items-center gap-2" href="/guide">
                <MenuBookIcon size={14} className="opacity-70" /> Guide
              </Link>
              <Link className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors flex items-center gap-2" href="/templates">
                <StyleIcon size={14} className="opacity-70" /> Templates
              </Link>
              <Link className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors flex items-center gap-2" href="/faq">
                <QuizIcon size={14} className="opacity-70" /> FAQ Hub
              </Link>
              <Link className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors flex items-center gap-2" href="/blog">
                <ArticleIcon size={14} className="opacity-70" /> Blog
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-text-light dark:text-text-dark uppercase tracking-wider text-xs flex items-center gap-1.5">
              <PublicIcon size={14} className="text-primary" /> Open Source
            </h4>
            <nav className="flex flex-col gap-3">
              <a
                className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors flex items-start gap-2 group"
                href={siteConfig.links.browserTestingTool}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DevicesIcon size={16} className="mt-0.5 group-hover:text-primary transition-colors shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium text-text-light dark:text-text-dark group-hover:text-primary transition-colors text-sm flex items-center gap-1">
                    Browser Testing Tool
                    <ArrowOutwardIcon size={12} className="opacity-60" />
                  </span>
                  <span className="text-xs mt-0.5 leading-relaxed text-text-muted-light dark:text-text-muted-dark">
                    Test Safari, Opera, and Firefox on any OS via Node &amp; npm.
                  </span>
                </div>
              </a>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border-light dark:border-border-dark flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs text-text-muted-light dark:text-text-muted-dark">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <span className="hidden sm:inline">•</span>
            <p className="flex items-center gap-1">
              <HeartIcon size={12} className="text-red-500" /> Built by{" "}
              <a
                className="hover:text-primary font-bold text-text-light dark:text-text-dark"
                href={siteConfig.creatorUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.creatorName}
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-5">
            <Link className="hover:text-primary flex items-center gap-1" href="/privacy-policy">
              <PolicyIcon size={13} /> Privacy Policy
            </Link>
            <Link className="hover:text-primary flex items-center gap-1" href="/terms-of-service">
              <GavelIcon size={13} /> Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
